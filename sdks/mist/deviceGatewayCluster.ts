// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DeviceGatewayCluster extends pulumi.CustomResource {
    /**
     * Get an existing DeviceGatewayCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DeviceGatewayClusterState, opts?: pulumi.CustomResourceOptions): DeviceGatewayCluster {
        return new DeviceGatewayCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'mist:index/deviceGatewayCluster:DeviceGatewayCluster';

    /**
     * Returns true if the given object is an instance of DeviceGatewayCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeviceGatewayCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeviceGatewayCluster.__pulumiType;
    }

    /**
     * when replacing a node, either mac has to remain the same as existing cluster
     */
    public readonly nodes!: pulumi.Output<outputs.DeviceGatewayClusterNode[]>;
    public readonly siteId!: pulumi.Output<string>;

    /**
     * Create a DeviceGatewayCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DeviceGatewayClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DeviceGatewayClusterArgs | DeviceGatewayClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DeviceGatewayClusterState | undefined;
            resourceInputs["nodes"] = state ? state.nodes : undefined;
            resourceInputs["siteId"] = state ? state.siteId : undefined;
        } else {
            const args = argsOrState as DeviceGatewayClusterArgs | undefined;
            if ((!args || args.nodes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nodes'");
            }
            if ((!args || args.siteId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'siteId'");
            }
            resourceInputs["nodes"] = args ? args.nodes : undefined;
            resourceInputs["siteId"] = args ? args.siteId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DeviceGatewayCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DeviceGatewayCluster resources.
 */
export interface DeviceGatewayClusterState {
    /**
     * when replacing a node, either mac has to remain the same as existing cluster
     */
    nodes?: pulumi.Input<pulumi.Input<inputs.DeviceGatewayClusterNode>[]>;
    siteId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DeviceGatewayCluster resource.
 */
export interface DeviceGatewayClusterArgs {
    /**
     * when replacing a node, either mac has to remain the same as existing cluster
     */
    nodes: pulumi.Input<pulumi.Input<inputs.DeviceGatewayClusterNode>[]>;
    siteId: pulumi.Input<string>;
}
