// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemSessionttlPort extends pulumi.CustomResource {
    /**
     * Get an existing SystemSessionttlPort resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemSessionttlPortState, opts?: pulumi.CustomResourceOptions): SystemSessionttlPort {
        return new SystemSessionttlPort(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemSessionttlPort:SystemSessionttlPort';

    /**
     * Returns true if the given object is an instance of SystemSessionttlPort.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemSessionttlPort {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemSessionttlPort.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly deviceVdom!: pulumi.Output<string>;
    public readonly endPort!: pulumi.Output<number | undefined>;
    public readonly fosid!: pulumi.Output<number>;
    public readonly protocol!: pulumi.Output<number | undefined>;
    public readonly refreshDirection!: pulumi.Output<string>;
    public readonly startPort!: pulumi.Output<number | undefined>;
    public readonly timeout!: pulumi.Output<string>;

    /**
     * Create a SystemSessionttlPort resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemSessionttlPortArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemSessionttlPortArgs | SystemSessionttlPortState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemSessionttlPortState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["deviceVdom"] = state ? state.deviceVdom : undefined;
            resourceInputs["endPort"] = state ? state.endPort : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["refreshDirection"] = state ? state.refreshDirection : undefined;
            resourceInputs["startPort"] = state ? state.startPort : undefined;
            resourceInputs["timeout"] = state ? state.timeout : undefined;
        } else {
            const args = argsOrState as SystemSessionttlPortArgs | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["deviceVdom"] = args ? args.deviceVdom : undefined;
            resourceInputs["endPort"] = args ? args.endPort : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["refreshDirection"] = args ? args.refreshDirection : undefined;
            resourceInputs["startPort"] = args ? args.startPort : undefined;
            resourceInputs["timeout"] = args ? args.timeout : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemSessionttlPort.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemSessionttlPort resources.
 */
export interface SystemSessionttlPortState {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    endPort?: pulumi.Input<number>;
    fosid?: pulumi.Input<number>;
    protocol?: pulumi.Input<number>;
    refreshDirection?: pulumi.Input<string>;
    startPort?: pulumi.Input<number>;
    timeout?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemSessionttlPort resource.
 */
export interface SystemSessionttlPortArgs {
    deviceName?: pulumi.Input<string>;
    deviceVdom?: pulumi.Input<string>;
    endPort?: pulumi.Input<number>;
    fosid?: pulumi.Input<number>;
    protocol?: pulumi.Input<number>;
    refreshDirection?: pulumi.Input<string>;
    startPort?: pulumi.Input<number>;
    timeout?: pulumi.Input<string>;
}
