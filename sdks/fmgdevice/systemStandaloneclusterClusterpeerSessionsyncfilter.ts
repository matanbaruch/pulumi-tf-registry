// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SystemStandaloneclusterClusterpeerSessionsyncfilter extends pulumi.CustomResource {
    /**
     * Get an existing SystemStandaloneclusterClusterpeerSessionsyncfilter resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemStandaloneclusterClusterpeerSessionsyncfilterState, opts?: pulumi.CustomResourceOptions): SystemStandaloneclusterClusterpeerSessionsyncfilter {
        return new SystemStandaloneclusterClusterpeerSessionsyncfilter(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemStandaloneclusterClusterpeerSessionsyncfilter:SystemStandaloneclusterClusterpeerSessionsyncfilter';

    /**
     * Returns true if the given object is an instance of SystemStandaloneclusterClusterpeerSessionsyncfilter.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemStandaloneclusterClusterpeerSessionsyncfilter {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemStandaloneclusterClusterpeerSessionsyncfilter.__pulumiType;
    }

    public readonly clusterPeer!: pulumi.Output<string>;
    public readonly customServices!: pulumi.Output<outputs.SystemStandaloneclusterClusterpeerSessionsyncfilterCustomService[] | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly dstaddr6!: pulumi.Output<string>;
    public readonly dstaddrs!: pulumi.Output<string[]>;
    public readonly dstintfs!: pulumi.Output<string[]>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly srcaddr6!: pulumi.Output<string>;
    public readonly srcaddrs!: pulumi.Output<string[]>;
    public readonly srcintfs!: pulumi.Output<string[]>;

    /**
     * Create a SystemStandaloneclusterClusterpeerSessionsyncfilter resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemStandaloneclusterClusterpeerSessionsyncfilterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemStandaloneclusterClusterpeerSessionsyncfilterArgs | SystemStandaloneclusterClusterpeerSessionsyncfilterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemStandaloneclusterClusterpeerSessionsyncfilterState | undefined;
            resourceInputs["clusterPeer"] = state ? state.clusterPeer : undefined;
            resourceInputs["customServices"] = state ? state.customServices : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["dstaddr6"] = state ? state.dstaddr6 : undefined;
            resourceInputs["dstaddrs"] = state ? state.dstaddrs : undefined;
            resourceInputs["dstintfs"] = state ? state.dstintfs : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["srcaddr6"] = state ? state.srcaddr6 : undefined;
            resourceInputs["srcaddrs"] = state ? state.srcaddrs : undefined;
            resourceInputs["srcintfs"] = state ? state.srcintfs : undefined;
        } else {
            const args = argsOrState as SystemStandaloneclusterClusterpeerSessionsyncfilterArgs | undefined;
            if ((!args || args.clusterPeer === undefined) && !opts.urn) {
                throw new Error("Missing required property 'clusterPeer'");
            }
            resourceInputs["clusterPeer"] = args ? args.clusterPeer : undefined;
            resourceInputs["customServices"] = args ? args.customServices : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["dstaddr6"] = args ? args.dstaddr6 : undefined;
            resourceInputs["dstaddrs"] = args ? args.dstaddrs : undefined;
            resourceInputs["dstintfs"] = args ? args.dstintfs : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["srcaddr6"] = args ? args.srcaddr6 : undefined;
            resourceInputs["srcaddrs"] = args ? args.srcaddrs : undefined;
            resourceInputs["srcintfs"] = args ? args.srcintfs : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemStandaloneclusterClusterpeerSessionsyncfilter.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemStandaloneclusterClusterpeerSessionsyncfilter resources.
 */
export interface SystemStandaloneclusterClusterpeerSessionsyncfilterState {
    clusterPeer?: pulumi.Input<string>;
    customServices?: pulumi.Input<pulumi.Input<inputs.SystemStandaloneclusterClusterpeerSessionsyncfilterCustomService>[]>;
    deviceName?: pulumi.Input<string>;
    dstaddr6?: pulumi.Input<string>;
    dstaddrs?: pulumi.Input<pulumi.Input<string>[]>;
    dstintfs?: pulumi.Input<pulumi.Input<string>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    srcaddr6?: pulumi.Input<string>;
    srcaddrs?: pulumi.Input<pulumi.Input<string>[]>;
    srcintfs?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a SystemStandaloneclusterClusterpeerSessionsyncfilter resource.
 */
export interface SystemStandaloneclusterClusterpeerSessionsyncfilterArgs {
    clusterPeer: pulumi.Input<string>;
    customServices?: pulumi.Input<pulumi.Input<inputs.SystemStandaloneclusterClusterpeerSessionsyncfilterCustomService>[]>;
    deviceName?: pulumi.Input<string>;
    dstaddr6?: pulumi.Input<string>;
    dstaddrs?: pulumi.Input<pulumi.Input<string>[]>;
    dstintfs?: pulumi.Input<pulumi.Input<string>[]>;
    dynamicSortSubtable?: pulumi.Input<string>;
    srcaddr6?: pulumi.Input<string>;
    srcaddrs?: pulumi.Input<pulumi.Input<string>[]>;
    srcintfs?: pulumi.Input<pulumi.Input<string>[]>;
}
