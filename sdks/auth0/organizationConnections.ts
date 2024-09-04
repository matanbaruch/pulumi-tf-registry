// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OrganizationConnections extends pulumi.CustomResource {
    /**
     * Get an existing OrganizationConnections resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OrganizationConnectionsState, opts?: pulumi.CustomResourceOptions): OrganizationConnections {
        return new OrganizationConnections(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'auth0:index/organizationConnections:OrganizationConnections';

    /**
     * Returns true if the given object is an instance of OrganizationConnections.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OrganizationConnections {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OrganizationConnections.__pulumiType;
    }

    /**
     * Connections that are enabled for the organization.
     */
    public readonly enabledConnections!: pulumi.Output<outputs.OrganizationConnectionsEnabledConnection[]>;
    /**
     * ID of the organization on which to enable the connections.
     */
    public readonly organizationId!: pulumi.Output<string>;

    /**
     * Create a OrganizationConnections resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: OrganizationConnectionsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OrganizationConnectionsArgs | OrganizationConnectionsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OrganizationConnectionsState | undefined;
            resourceInputs["enabledConnections"] = state ? state.enabledConnections : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
        } else {
            const args = argsOrState as OrganizationConnectionsArgs | undefined;
            if ((!args || args.enabledConnections === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabledConnections'");
            }
            if ((!args || args.organizationId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organizationId'");
            }
            resourceInputs["enabledConnections"] = args ? args.enabledConnections : undefined;
            resourceInputs["organizationId"] = args ? args.organizationId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OrganizationConnections.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OrganizationConnections resources.
 */
export interface OrganizationConnectionsState {
    /**
     * Connections that are enabled for the organization.
     */
    enabledConnections?: pulumi.Input<pulumi.Input<inputs.OrganizationConnectionsEnabledConnection>[]>;
    /**
     * ID of the organization on which to enable the connections.
     */
    organizationId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a OrganizationConnections resource.
 */
export interface OrganizationConnectionsArgs {
    /**
     * Connections that are enabled for the organization.
     */
    enabledConnections: pulumi.Input<pulumi.Input<inputs.OrganizationConnectionsEnabledConnection>[]>;
    /**
     * ID of the organization on which to enable the connections.
     */
    organizationId: pulumi.Input<string>;
}
