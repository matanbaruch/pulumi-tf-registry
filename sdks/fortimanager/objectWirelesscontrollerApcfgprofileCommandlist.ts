// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectWirelesscontrollerApcfgprofileCommandlist extends pulumi.CustomResource {
    /**
     * Get an existing ObjectWirelesscontrollerApcfgprofileCommandlist resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectWirelesscontrollerApcfgprofileCommandlistState, opts?: pulumi.CustomResourceOptions): ObjectWirelesscontrollerApcfgprofileCommandlist {
        return new ObjectWirelesscontrollerApcfgprofileCommandlist(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectWirelesscontrollerApcfgprofileCommandlist:ObjectWirelesscontrollerApcfgprofileCommandlist';

    /**
     * Returns true if the given object is an instance of ObjectWirelesscontrollerApcfgprofileCommandlist.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectWirelesscontrollerApcfgprofileCommandlist {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectWirelesscontrollerApcfgprofileCommandlist.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly apcfgProfile!: pulumi.Output<string>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly passwdValues!: pulumi.Output<string[]>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly type!: pulumi.Output<string>;
    public readonly value!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectWirelesscontrollerApcfgprofileCommandlist resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectWirelesscontrollerApcfgprofileCommandlistArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectWirelesscontrollerApcfgprofileCommandlistArgs | ObjectWirelesscontrollerApcfgprofileCommandlistState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectWirelesscontrollerApcfgprofileCommandlistState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["apcfgProfile"] = state ? state.apcfgProfile : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["passwdValues"] = state ? state.passwdValues : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as ObjectWirelesscontrollerApcfgprofileCommandlistArgs | undefined;
            if ((!args || args.apcfgProfile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'apcfgProfile'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["apcfgProfile"] = args ? args.apcfgProfile : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["passwdValues"] = args?.passwdValues ? pulumi.secret(args.passwdValues) : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["passwdValues"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(ObjectWirelesscontrollerApcfgprofileCommandlist.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectWirelesscontrollerApcfgprofileCommandlist resources.
 */
export interface ObjectWirelesscontrollerApcfgprofileCommandlistState {
    adom?: pulumi.Input<string>;
    apcfgProfile?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    passwdValues?: pulumi.Input<pulumi.Input<string>[]>;
    scopetype?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectWirelesscontrollerApcfgprofileCommandlist resource.
 */
export interface ObjectWirelesscontrollerApcfgprofileCommandlistArgs {
    adom?: pulumi.Input<string>;
    apcfgProfile: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    passwdValues?: pulumi.Input<pulumi.Input<string>[]>;
    scopetype?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}
