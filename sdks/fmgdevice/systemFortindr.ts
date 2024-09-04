// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemFortindr extends pulumi.CustomResource {
    /**
     * Get an existing SystemFortindr resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemFortindrState, opts?: pulumi.CustomResourceOptions): SystemFortindr {
        return new SystemFortindr(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemFortindr:SystemFortindr';

    /**
     * Returns true if the given object is an instance of SystemFortindr.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemFortindr {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemFortindr.__pulumiType;
    }

    public readonly deviceName!: pulumi.Output<string>;
    public readonly interfaceSelectMethod!: pulumi.Output<string>;
    public readonly interfaces!: pulumi.Output<string[]>;
    public readonly sourceIp!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a SystemFortindr resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemFortindrArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemFortindrArgs | SystemFortindrState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemFortindrState | undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["interfaceSelectMethod"] = state ? state.interfaceSelectMethod : undefined;
            resourceInputs["interfaces"] = state ? state.interfaces : undefined;
            resourceInputs["sourceIp"] = state ? state.sourceIp : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SystemFortindrArgs | undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["interfaceSelectMethod"] = args ? args.interfaceSelectMethod : undefined;
            resourceInputs["interfaces"] = args ? args.interfaces : undefined;
            resourceInputs["sourceIp"] = args ? args.sourceIp : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemFortindr.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemFortindr resources.
 */
export interface SystemFortindrState {
    deviceName?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    sourceIp?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemFortindr resource.
 */
export interface SystemFortindrArgs {
    deviceName?: pulumi.Input<string>;
    interfaceSelectMethod?: pulumi.Input<string>;
    interfaces?: pulumi.Input<pulumi.Input<string>[]>;
    sourceIp?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
