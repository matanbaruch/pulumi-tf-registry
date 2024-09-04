// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Logtacacsaccounting3Setting extends pulumi.CustomResource {
    /**
     * Get an existing Logtacacsaccounting3Setting resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Logtacacsaccounting3SettingState, opts?: pulumi.CustomResourceOptions): Logtacacsaccounting3Setting {
        return new Logtacacsaccounting3Setting(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/logtacacsaccounting3Setting:Logtacacsaccounting3Setting';

    /**
     * Returns true if the given object is an instance of Logtacacsaccounting3Setting.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Logtacacsaccounting3Setting {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Logtacacsaccounting3Setting.__pulumiType;
    }

    public readonly interface!: pulumi.Output<string>;
    public readonly interfaceSelectMethod!: pulumi.Output<string>;
    public readonly server!: pulumi.Output<string>;
    public readonly serverKey!: pulumi.Output<string | undefined>;
    public readonly sourceIp!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a Logtacacsaccounting3Setting resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Logtacacsaccounting3SettingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Logtacacsaccounting3SettingArgs | Logtacacsaccounting3SettingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Logtacacsaccounting3SettingState | undefined;
            resourceInputs["interface"] = state ? state.interface : undefined;
            resourceInputs["interfaceSelectMethod"] = state ? state.interfaceSelectMethod : undefined;
            resourceInputs["server"] = state ? state.server : undefined;
            resourceInputs["serverKey"] = state ? state.serverKey : undefined;
            resourceInputs["sourceIp"] = state ? state.sourceIp : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as Logtacacsaccounting3SettingArgs | undefined;
            resourceInputs["interface"] = args ? args.interface : undefined;
            resourceInputs["interfaceSelectMethod"] = args ? args.interfaceSelectMethod : undefined;
            resourceInputs["server"] = args ? args.server : undefined;
            resourceInputs["serverKey"] = args ? args.serverKey : undefined;
            resourceInputs["sourceIp"] = args ? args.sourceIp : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Logtacacsaccounting3Setting.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Logtacacsaccounting3Setting resources.
 */
export interface Logtacacsaccounting3SettingState {
    interface?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    serverKey?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Logtacacsaccounting3Setting resource.
 */
export interface Logtacacsaccounting3SettingArgs {
    interface?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    server?: pulumi.Input<string>;
    serverKey?: pulumi.Input<string>;
    sourceIp?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
