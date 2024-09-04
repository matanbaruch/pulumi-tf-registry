// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AckOneCluster extends pulumi.CustomResource {
    /**
     * Get an existing AckOneCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AckOneClusterState, opts?: pulumi.CustomResourceOptions): AckOneCluster {
        return new AckOneCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/ackOneCluster:AckOneCluster';

    /**
     * Returns true if the given object is an instance of AckOneCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AckOneCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AckOneCluster.__pulumiType;
    }

    public readonly clusterName!: pulumi.Output<string>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly network!: pulumi.Output<outputs.AckOneClusterNetwork>;
    public readonly profile!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.AckOneClusterTimeouts | undefined>;

    /**
     * Create a AckOneCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AckOneClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AckOneClusterArgs | AckOneClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AckOneClusterState | undefined;
            resourceInputs["clusterName"] = state ? state.clusterName : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["network"] = state ? state.network : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as AckOneClusterArgs | undefined;
            if ((!args || args.network === undefined) && !opts.urn) {
                throw new Error("Missing required property 'network'");
            }
            resourceInputs["clusterName"] = args ? args.clusterName : undefined;
            resourceInputs["network"] = args ? args.network : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AckOneCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AckOneCluster resources.
 */
export interface AckOneClusterState {
    clusterName?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    network?: pulumi.Input<inputs.AckOneClusterNetwork>;
    profile?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AckOneClusterTimeouts>;
}

/**
 * The set of arguments for constructing a AckOneCluster resource.
 */
export interface AckOneClusterArgs {
    clusterName?: pulumi.Input<string>;
    network: pulumi.Input<inputs.AckOneClusterNetwork>;
    profile?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.AckOneClusterTimeouts>;
}
