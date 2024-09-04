// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemNetflowCollectors extends pulumi.CustomResource {
    /**
     * Get an existing SystemNetflowCollectors resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemNetflowCollectorsState, opts?: pulumi.CustomResourceOptions): SystemNetflowCollectors {
        return new SystemNetflowCollectors(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemNetflowCollectors:SystemNetflowCollectors';

    /**
     * Returns true if the given object is an instance of SystemNetflowCollectors.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemNetflowCollectors {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemNetflowCollectors.__pulumiType;
    }

    public readonly collectorIp!: pulumi.Output<string | undefined>;
    public readonly collectorPort!: pulumi.Output<number>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly interfaceSelectMethod!: pulumi.Output<string>;
    public readonly interfaces!: pulumi.Output<string[]>;
    public readonly sourceIp!: pulumi.Output<string | undefined>;

    /**
     * Create a SystemNetflowCollectors resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemNetflowCollectorsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemNetflowCollectorsArgs | SystemNetflowCollectorsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemNetflowCollectorsState | undefined;
            resourceInputs["collectorIp"] = state ? state.collectorIp : undefined;
            resourceInputs["collectorPort"] = state ? state.collectorPort : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["interfaceSelectMethod"] = state ? state.interfaceSelectMethod : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["sourceIp"] = state ? state.sourceIp : undefined;
        } else {
            const args = argsOrState as SystemNetflowCollectorsArgs | undefined;
            resourceInputs["collectorIp"] = args ? args.collectorIp : undefined;
            resourceInputs["collectorPort"] = args ? args.collectorPort : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["interfaceSelectMethod"] = args ? args.interfaceSelectMethod : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["sourceIp"] = args ? args.sourceIp : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemNetflowCollectors.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemNetflowCollectors resources.
 */
export interface SystemNetflowCollectorsState {
    collectorIp?: pulumi.Input<string>;
    collectorPort?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    interfaceSelectMethod?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    sourceIp?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemNetflowCollectors resource.
 */
export interface SystemNetflowCollectorsArgs {
    collectorIp?: pulumi.Input<string>;
    collectorPort?: pulumi.Input<number>;
    deviceName?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    interfaceSelectMethod?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    sourceIp?: pulumi.Input<string>;
}
