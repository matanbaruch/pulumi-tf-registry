// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CddcDedicatedHostGroup extends pulumi.CustomResource {
    /**
     * Get an existing CddcDedicatedHostGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CddcDedicatedHostGroupState, opts?: pulumi.CustomResourceOptions): CddcDedicatedHostGroup {
        return new CddcDedicatedHostGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/cddcDedicatedHostGroup:CddcDedicatedHostGroup';

    /**
     * Returns true if the given object is an instance of CddcDedicatedHostGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CddcDedicatedHostGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CddcDedicatedHostGroup.__pulumiType;
    }

    public readonly allocationPolicy!: pulumi.Output<string>;
    public readonly cpuAllocationRatio!: pulumi.Output<number>;
    public readonly dedicatedHostGroupDesc!: pulumi.Output<string | undefined>;
    public readonly diskAllocationRatio!: pulumi.Output<number>;
    public readonly engine!: pulumi.Output<string>;
    public readonly hostReplacePolicy!: pulumi.Output<string>;
    public readonly memAllocationRatio!: pulumi.Output<number>;
    public readonly openPermission!: pulumi.Output<boolean>;
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a CddcDedicatedHostGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CddcDedicatedHostGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CddcDedicatedHostGroupArgs | CddcDedicatedHostGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CddcDedicatedHostGroupState | undefined;
            resourceInputs["allocationPolicy"] = state ? state.allocationPolicy : undefined;
            resourceInputs["cpuAllocationRatio"] = state ? state.cpuAllocationRatio : undefined;
            resourceInputs["dedicatedHostGroupDesc"] = state ? state.dedicatedHostGroupDesc : undefined;
            resourceInputs["diskAllocationRatio"] = state ? state.diskAllocationRatio : undefined;
            resourceInputs["engine"] = state ? state.engine : undefined;
            resourceInputs["hostReplacePolicy"] = state ? state.hostReplacePolicy : undefined;
            resourceInputs["memAllocationRatio"] = state ? state.memAllocationRatio : undefined;
            resourceInputs["openPermission"] = state ? state.openPermission : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as CddcDedicatedHostGroupArgs | undefined;
            if ((!args || args.engine === undefined) && !opts.urn) {
                throw new Error("Missing required property 'engine'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["allocationPolicy"] = args ? args.allocationPolicy : undefined;
            resourceInputs["cpuAllocationRatio"] = args ? args.cpuAllocationRatio : undefined;
            resourceInputs["dedicatedHostGroupDesc"] = args ? args.dedicatedHostGroupDesc : undefined;
            resourceInputs["diskAllocationRatio"] = args ? args.diskAllocationRatio : undefined;
            resourceInputs["engine"] = args ? args.engine : undefined;
            resourceInputs["hostReplacePolicy"] = args ? args.hostReplacePolicy : undefined;
            resourceInputs["memAllocationRatio"] = args ? args.memAllocationRatio : undefined;
            resourceInputs["openPermission"] = args ? args.openPermission : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CddcDedicatedHostGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CddcDedicatedHostGroup resources.
 */
export interface CddcDedicatedHostGroupState {
    allocationPolicy?: pulumi.Input<string>;
    cpuAllocationRatio?: pulumi.Input<number>;
    dedicatedHostGroupDesc?: pulumi.Input<string>;
    diskAllocationRatio?: pulumi.Input<number>;
    engine?: pulumi.Input<string>;
    hostReplacePolicy?: pulumi.Input<string>;
    memAllocationRatio?: pulumi.Input<number>;
    openPermission?: pulumi.Input<boolean>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CddcDedicatedHostGroup resource.
 */
export interface CddcDedicatedHostGroupArgs {
    allocationPolicy?: pulumi.Input<string>;
    cpuAllocationRatio?: pulumi.Input<number>;
    dedicatedHostGroupDesc?: pulumi.Input<string>;
    diskAllocationRatio?: pulumi.Input<number>;
    engine: pulumi.Input<string>;
    hostReplacePolicy?: pulumi.Input<string>;
    memAllocationRatio?: pulumi.Input<number>;
    openPermission?: pulumi.Input<boolean>;
    vpcId: pulumi.Input<string>;
}
