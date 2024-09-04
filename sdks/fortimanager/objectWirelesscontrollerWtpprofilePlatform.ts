// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectWirelesscontrollerWtpprofilePlatform extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWirelesscontrollerWtpprofilePlatform resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWirelesscontrollerWtpprofilePlatformState, opts?: pulumi.CustomResourceOptions): ObjectWirelesscontrollerWtpprofilePlatform {
        return new ObjectWirelesscontrollerWtpprofilePlatform(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWirelesscontrollerWtpprofilePlatform:ObjectWirelesscontrollerWtpprofilePlatform';

    /**
     * Returns true if the given object is an instance of ObjectWirelesscontrollerWtpprofilePlatform.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWirelesscontrollerWtpprofilePlatform {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWirelesscontrollerWtpprofilePlatform.__pulumiType;
    }

    public readonly _localPlatformStr!: pulumi.Output<string | undefined>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly ddscan!: pulumi.Output<string>;
    public readonly mode!: pulumi.Output<string | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly wtpProfile!: pulumi.Output<string>;

    /**
     * Create a ObjectWirelesscontrollerWtpprofilePlatform resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectWirelesscontrollerWtpprofilePlatformArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWirelesscontrollerWtpprofilePlatformArgs | ObjectWirelesscontrollerWtpprofilePlatformState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWirelesscontrollerWtpprofilePlatformState | undefined;
            resourceInputs["_localPlatformStr"] = state ? state._localPlatformStr : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["ddscan"] = state ? state.ddscan : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["wtpProfile"] = state ? state.wtpProfile : undefined;
        } else {
            const args = argsOrState as ObjectWirelesscontrollerWtpprofilePlatformArgs | undefined;
            if ((!args || args.wtpProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'wtpProfile'");
            }
            resourceInputs["_localPlatformStr"] = args ? args._localPlatformStr : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["ddscan"] = args ? args.ddscan : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["wtpProfile"] = args ? args.wtpProfile : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectWirelesscontrollerWtpprofilePlatform.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWirelesscontrollerWtpprofilePlatform resources.
 */
export interface ObjectWirelesscontrollerWtpprofilePlatformState {
    _localPlatformStr?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    ddscan?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    wtpProfile?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectWirelesscontrollerWtpprofilePlatform resource.
 */
export interface ObjectWirelesscontrollerWtpprofilePlatformArgs {
    _localPlatformStr?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    ddscan?: pulumi.Input<string>;
    mode?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    wtpProfile: pulumi.Input<string>;
}
