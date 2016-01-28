/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2010, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.jboss.hal.meta.processing;

import org.jboss.hal.meta.AddressTemplate;
import org.jboss.hal.meta.StatementContext;

import java.util.Set;

import static org.junit.Assert.*;

/**
 * @author Harald Pehl
 */
class RrdParserTestHelper {

    static void assertResults(Set<RrdResult> results, int size, String... addresses) {
        assertEquals(size, results.size());

        for (String address : addresses) {
            assertTrue("RrdResults does not contain address " + address,
                    results.contains(new RrdResult(AddressTemplate.of(address).resolve(StatementContext.NOOP))));
        }
    }

    static void assertDescriptionOnly(Set<RrdResult> results) {
        for (RrdResult result : results) {
            assertNotNull(result.resourceDescription);
            assertNull(result.securityContext);
        }
    }

    static void assertSecurityContextOnly(Set<RrdResult> results) {
        for (RrdResult result : results) {
            assertNull(result.resourceDescription);
            assertNotNull(result.securityContext);
        }
    }

    static void assertCombined(Set<RrdResult> results) {
        for (RrdResult result : results) {
            assertNotNull(result.resourceDescription);
            assertNotNull(result.securityContext);
        }
    }
}