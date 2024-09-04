// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemReplacemsgIcap extends pulumi.CustomResource {
    /**
     * Get an existing SystemReplacemsgIcap resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemReplacemsgIcapState, opts?: pulumi.CustomResourceOptions): SystemReplacemsgIcap {
        return new SystemReplacemsgIcap(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemReplacemsgIcap:SystemReplacemsgIcap';

    /**
     * Returns true if the given object is an instance of SystemReplacemsgIcap.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemReplacemsgIcap {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemReplacemsgIcap.__pulumiType;
    }

    public readonly buffer!: pulumi.Output<string>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly format!: pulumi.Output<string>;
    public readonly header!: pulumi.Output<string>;
    public readonly msgType!: pulumi.Output<string | undefined>;

    /**
     * Create a SystemReplacemsgIcap resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemReplacemsgIcapArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemReplacemsgIcapArgs | SystemReplacemsgIcapState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemReplacemsgIcapState | undefined;
            resourceInputs["buffer"] = state ? state.buffer : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["format"] = state ? state.format : undefined;
            resourceInputs["header"] = state ? state.header : undefined;
            resourceInputs["msgType"] = state ? state.msgType : undefined;
        } else {
            const args = argsOrState as SystemReplacemsgIcapArgs | undefined;
            resourceInputs["buffer"] = args ? args.buffer : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["format"] = args ? args.format : undefined;
            resourceInputs["header"] = args ? args.header : undefined;
            resourceInputs["msgType"] = args ? args.msgType : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemReplacemsgIcap.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemReplacemsgIcap resources.
 */
export interface SystemReplacemsgIcapState {
    buffer?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
    header?: pulumi.Input<string>;
    msgType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemReplacemsgIcap resource.
 */
export interface SystemReplacemsgIcapArgs {
    buffer?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    format?: pulumi.Input<string>;
    header?: pulumi.Input<string>;
    msgType?: pulumi.Input<string>;
}
