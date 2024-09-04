// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ClusterPersonality extends pulumi.CustomResource {
    /**
     * Get an existing ClusterPersonality resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ClusterPersonalityState, opts?: pulumi.CustomResourceOptions): ClusterPersonality {
        return new ClusterPersonality(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vcf:index/clusterPersonality:ClusterPersonality';

    /**
     * Returns true if the given object is an instance of ClusterPersonality.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ClusterPersonality {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ClusterPersonality.__pulumiType;
    }

    /**
     * The identifier of the source cluster within the vCenter server (e.g. domain-c1)
     */
    public readonly clusterId!: pulumi.Output<string>;
    /**
     * The identifier of the domain which contains the vcenter and source cluster
     */
    public readonly domainId!: pulumi.Output<string>;
    /**
     * The name for the personality
     */
    public readonly name!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ClusterPersonalityTimeouts | undefined>;

    /**
     * Create a ClusterPersonality resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ClusterPersonalityArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ClusterPersonalityArgs | ClusterPersonalityState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ClusterPersonalityState | undefined;
            resourceInputs["clusterId"] = state ? state.clusterId : undefined;
            resourceInputs["domainId"] = state ? state.domainId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ClusterPersonalityArgs | undefined;
            if ((!args || args.clusterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterId'");
            }
            if ((!args || args.domainId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domainId'");
            }
            resourceInputs["clusterId"] = args ? args.clusterId : undefined;
            resourceInputs["domainId"] = args ? args.domainId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ClusterPersonality.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ClusterPersonality resources.
 */
export interface ClusterPersonalityState {
    /**
     * The identifier of the source cluster within the vCenter server (e.g. domain-c1)
     */
    clusterId?: pulumi.Input<string>;
    /**
     * The identifier of the domain which contains the vcenter and source cluster
     */
    domainId?: pulumi.Input<string>;
    /**
     * The name for the personality
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ClusterPersonalityTimeouts>;
}

/**
 * The set of arguments for constructing a ClusterPersonality resource.
 */
export interface ClusterPersonalityArgs {
    /**
     * The identifier of the source cluster within the vCenter server (e.g. domain-c1)
     */
    clusterId: pulumi.Input<string>;
    /**
     * The identifier of the domain which contains the vcenter and source cluster
     */
    domainId: pulumi.Input<string>;
    /**
     * The name for the personality
     */
    name?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ClusterPersonalityTimeouts>;
}
