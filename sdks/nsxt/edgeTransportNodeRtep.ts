// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EdgeTransportNodeRtep extends pulumi.CustomResource {
    /**
     * Get an existing EdgeTransportNodeRtep resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EdgeTransportNodeRtepState, opts?: pulumi.CustomResourceOptions): EdgeTransportNodeRtep {
        return new EdgeTransportNodeRtep(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt:index/edgeTransportNodeRtep:EdgeTransportNodeRtep';

    /**
     * Returns true if the given object is an instance of EdgeTransportNodeRtep.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EdgeTransportNodeRtep {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EdgeTransportNodeRtep.__pulumiType;
    }

    /**
     * Edge ID to associate with remote tunnel endpoint.
     */
    public readonly edgeId!: pulumi.Output<string>;
    /**
     * The host switch name to be used for the remote tunnel endpoint
     */
    public readonly hostSwitchName!: pulumi.Output<string>;
    /**
     * Specification for IPs to be used with host switch virtual tunnel endpoints
     */
    public readonly ipAssignment!: pulumi.Output<outputs.EdgeTransportNodeRtepIpAssignment>;
    /**
     * The named teaming policy to be used by the remote tunnel endpoint
     */
    public readonly namedTeamingPolicy!: pulumi.Output<string | undefined>;
    /**
     * VLAN id for remote tunnel endpoint
     */
    public readonly rtepVlan!: pulumi.Output<number>;

    /**
     * Create a EdgeTransportNodeRtep resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EdgeTransportNodeRtepArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EdgeTransportNodeRtepArgs | EdgeTransportNodeRtepState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EdgeTransportNodeRtepState | undefined;
            resourceInputs["edgeId"] = state ? state.edgeId : undefined;
            resourceInputs["hostSwitchName"] = state ? state.hostSwitchName : undefined;
            resourceInputs["ipAssignment"] = state ? state.ipAssignment : undefined;
            resourceInputs["namedTeamingPolicy"] = state ? state.namedTeamingPolicy : undefined;
            resourceInputs["rtepVlan"] = state ? state.rtepVlan : undefined;
        } else {
            const args = argsOrState as EdgeTransportNodeRtepArgs | undefined;
            if ((!args || args.edgeId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'edgeId'");
            }
            if ((!args || args.hostSwitchName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hostSwitchName'");
            }
            if ((!args || args.ipAssignment === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipAssignment'");
            }
            if ((!args || args.rtepVlan === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rtepVlan'");
            }
            resourceInputs["edgeId"] = args ? args.edgeId : undefined;
            resourceInputs["hostSwitchName"] = args ? args.hostSwitchName : undefined;
            resourceInputs["ipAssignment"] = args ? args.ipAssignment : undefined;
            resourceInputs["namedTeamingPolicy"] = args ? args.namedTeamingPolicy : undefined;
            resourceInputs["rtepVlan"] = args ? args.rtepVlan : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EdgeTransportNodeRtep.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EdgeTransportNodeRtep resources.
 */
export interface EdgeTransportNodeRtepState {
    /**
     * Edge ID to associate with remote tunnel endpoint.
     */
    edgeId?: pulumi.Input<string>;
    /**
     * The host switch name to be used for the remote tunnel endpoint
     */
    hostSwitchName?: pulumi.Input<string>;
    /**
     * Specification for IPs to be used with host switch virtual tunnel endpoints
     */
    ipAssignment?: pulumi.Input<inputs.EdgeTransportNodeRtepIpAssignment>;
    /**
     * The named teaming policy to be used by the remote tunnel endpoint
     */
    namedTeamingPolicy?: pulumi.Input<string>;
    /**
     * VLAN id for remote tunnel endpoint
     */
    rtepVlan?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a EdgeTransportNodeRtep resource.
 */
export interface EdgeTransportNodeRtepArgs {
    /**
     * Edge ID to associate with remote tunnel endpoint.
     */
    edgeId: pulumi.Input<string>;
    /**
     * The host switch name to be used for the remote tunnel endpoint
     */
    hostSwitchName: pulumi.Input<string>;
    /**
     * Specification for IPs to be used with host switch virtual tunnel endpoints
     */
    ipAssignment: pulumi.Input<inputs.EdgeTransportNodeRtepIpAssignment>;
    /**
     * The named teaming policy to be used by the remote tunnel endpoint
     */
    namedTeamingPolicy?: pulumi.Input<string>;
    /**
     * VLAN id for remote tunnel endpoint
     */
    rtepVlan: pulumi.Input<number>;
}
