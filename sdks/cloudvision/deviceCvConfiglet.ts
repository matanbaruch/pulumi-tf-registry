// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DeviceCvConfiglet extends pulumi.CustomResource {
    /**
     * Get an existing DeviceCvConfiglet resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DeviceCvConfigletState, opts?: pulumi.CustomResourceOptions): DeviceCvConfiglet {
        return new DeviceCvConfiglet(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudvision:index/deviceCvConfiglet:DeviceCvConfiglet';

    /**
     * Returns true if the given object is an instance of DeviceCvConfiglet.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DeviceCvConfiglet {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DeviceCvConfiglet.__pulumiType;
    }

    public readonly additionalConfiglets!: pulumi.Output<string[] | undefined>;
    public readonly deviceAddConfiglettaskid!: pulumi.Output<number>;
    public readonly deviceConfigletBase!: pulumi.Output<string | undefined>;
    public readonly deviceConfigletBaseKey!: pulumi.Output<string>;
    public readonly deviceConfigletBaseName!: pulumi.Output<string>;
    public readonly deviceConfiglettaskid!: pulumi.Output<number>;
    public readonly deviceFqdn!: pulumi.Output<string | undefined>;
    public readonly deviceSerial!: pulumi.Output<string>;
    public readonly overwriteCompliant!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.DeviceCvConfigletTimeouts | undefined>;

    /**
     * Create a DeviceCvConfiglet resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DeviceCvConfigletArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DeviceCvConfigletArgs | DeviceCvConfigletState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DeviceCvConfigletState | undefined;
            resourceInputs["additionalConfiglets"] = state ? state.additionalConfiglets : undefined;
            resourceInputs["deviceAddConfiglettaskid"] = state ? state.deviceAddConfiglettaskid : undefined;
            resourceInputs["deviceConfigletBase"] = state ? state.deviceConfigletBase : undefined;
            resourceInputs["deviceConfigletBaseKey"] = state ? state.deviceConfigletBaseKey : undefined;
            resourceInputs["deviceConfigletBaseName"] = state ? state.deviceConfigletBaseName : undefined;
            resourceInputs["deviceConfiglettaskid"] = state ? state.deviceConfiglettaskid : undefined;
            resourceInputs["deviceFqdn"] = state ? state.deviceFqdn : undefined;
            resourceInputs["deviceSerial"] = state ? state.deviceSerial : undefined;
            resourceInputs["overwriteCompliant"] = state ? state.overwriteCompliant : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as DeviceCvConfigletArgs | undefined;
            resourceInputs["additionalConfiglets"] = args ? args.additionalConfiglets : undefined;
            resourceInputs["deviceAddConfiglettaskid"] = args ? args.deviceAddConfiglettaskid : undefined;
            resourceInputs["deviceConfigletBase"] = args ? args.deviceConfigletBase : undefined;
            resourceInputs["deviceConfigletBaseKey"] = args ? args.deviceConfigletBaseKey : undefined;
            resourceInputs["deviceConfigletBaseName"] = args ? args.deviceConfigletBaseName : undefined;
            resourceInputs["deviceConfiglettaskid"] = args ? args.deviceConfiglettaskid : undefined;
            resourceInputs["deviceFqdn"] = args ? args.deviceFqdn : undefined;
            resourceInputs["deviceSerial"] = args ? args.deviceSerial : undefined;
            resourceInputs["overwriteCompliant"] = args ? args.overwriteCompliant : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DeviceCvConfiglet.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DeviceCvConfiglet resources.
 */
export interface DeviceCvConfigletState {
    additionalConfiglets?: pulumi.Input<pulumi.Input<string>[]>;
    deviceAddConfiglettaskid?: pulumi.Input<number>;
    deviceConfigletBase?: pulumi.Input<string>;
    deviceConfigletBaseKey?: pulumi.Input<string>;
    deviceConfigletBaseName?: pulumi.Input<string>;
    deviceConfiglettaskid?: pulumi.Input<number>;
    deviceFqdn?: pulumi.Input<string>;
    deviceSerial?: pulumi.Input<string>;
    overwriteCompliant?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.DeviceCvConfigletTimeouts>;
}

/**
 * The set of arguments for constructing a DeviceCvConfiglet resource.
 */
export interface DeviceCvConfigletArgs {
    additionalConfiglets?: pulumi.Input<pulumi.Input<string>[]>;
    deviceAddConfiglettaskid?: pulumi.Input<number>;
    deviceConfigletBase?: pulumi.Input<string>;
    deviceConfigletBaseKey?: pulumi.Input<string>;
    deviceConfigletBaseName?: pulumi.Input<string>;
    deviceConfiglettaskid?: pulumi.Input<number>;
    deviceFqdn?: pulumi.Input<string>;
    deviceSerial?: pulumi.Input<string>;
    overwriteCompliant?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.DeviceCvConfigletTimeouts>;
}
