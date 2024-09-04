// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectUserPasswordpolicy extends pulumi.CustomResource {
    /**
     * Get an existing ObjectUserPasswordpolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectUserPasswordpolicyState, opts?: pulumi.CustomResourceOptions): ObjectUserPasswordpolicy {
        return new ObjectUserPasswordpolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectUserPasswordpolicy:ObjectUserPasswordpolicy';

    /**
     * Returns true if the given object is an instance of ObjectUserPasswordpolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectUserPasswordpolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectUserPasswordpolicy.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly expireDays!: pulumi.Output<number>;
    public readonly expireStatus!: pulumi.Output<string>;
    public readonly expiredPasswordRenewal!: pulumi.Output<string>;
    public readonly minChangeCharacters!: pulumi.Output<number | undefined>;
    public readonly minLowerCaseLetter!: pulumi.Output<number | undefined>;
    public readonly minNonAlphanumeric!: pulumi.Output<number | undefined>;
    public readonly minNumber!: pulumi.Output<number | undefined>;
    public readonly minUpperCaseLetter!: pulumi.Output<number | undefined>;
    public readonly minimumLength!: pulumi.Output<number>;
    public readonly name!: pulumi.Output<string>;
    public readonly reusePassword!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly warnDays!: pulumi.Output<number>;

    /**
     * Create a ObjectUserPasswordpolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectUserPasswordpolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectUserPasswordpolicyArgs | ObjectUserPasswordpolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectUserPasswordpolicyState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["expireDays"] = state ? state.expireDays : undefined;
            resourceInputs["expireStatus"] = state ? state.expireStatus : undefined;
            resourceInputs["expiredPasswordRenewal"] = state ? state.expiredPasswordRenewal : undefined;
            resourceInputs["minChangeCharacters"] = state ? state.minChangeCharacters : undefined;
            resourceInputs["minLowerCaseLetter"] = state ? state.minLowerCaseLetter : undefined;
            resourceInputs["minNonAlphanumeric"] = state ? state.minNonAlphanumeric : undefined;
            resourceInputs["minNumber"] = state ? state.minNumber : undefined;
            resourceInputs["minUpperCaseLetter"] = state ? state.minUpperCaseLetter : undefined;
            resourceInputs["minimumLength"] = state ? state.minimumLength : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["reusePassword"] = state ? state.reusePassword : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["warnDays"] = state ? state.warnDays : undefined;
        } else {
            const args = argsOrState as ObjectUserPasswordpolicyArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["expireDays"] = args ? args.expireDays : undefined;
            resourceInputs["expireStatus"] = args ? args.expireStatus : undefined;
            resourceInputs["expiredPasswordRenewal"] = args ? args.expiredPasswordRenewal : undefined;
            resourceInputs["minChangeCharacters"] = args ? args.minChangeCharacters : undefined;
            resourceInputs["minLowerCaseLetter"] = args ? args.minLowerCaseLetter : undefined;
            resourceInputs["minNonAlphanumeric"] = args ? args.minNonAlphanumeric : undefined;
            resourceInputs["minNumber"] = args ? args.minNumber : undefined;
            resourceInputs["minUpperCaseLetter"] = args ? args.minUpperCaseLetter : undefined;
            resourceInputs["minimumLength"] = args ? args.minimumLength : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["reusePassword"] = args ? args.reusePassword : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["warnDays"] = args ? args.warnDays : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectUserPasswordpolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectUserPasswordpolicy resources.
 */
export interface ObjectUserPasswordpolicyState {
    adom?: pulumi.Input<string>;
    expireDays?: pulumi.Input<number>;
    expireStatus?: pulumi.Input<string>;
    expiredPasswordRenewal?: pulumi.Input<string>;
    minChangeCharacters?: pulumi.Input<number>;
    minLowerCaseLetter?: pulumi.Input<number>;
    minNonAlphanumeric?: pulumi.Input<number>;
    minNumber?: pulumi.Input<number>;
    minUpperCaseLetter?: pulumi.Input<number>;
    minimumLength?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    reusePassword?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    warnDays?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a ObjectUserPasswordpolicy resource.
 */
export interface ObjectUserPasswordpolicyArgs {
    adom?: pulumi.Input<string>;
    expireDays?: pulumi.Input<number>;
    expireStatus?: pulumi.Input<string>;
    expiredPasswordRenewal?: pulumi.Input<string>;
    minChangeCharacters?: pulumi.Input<number>;
    minLowerCaseLetter?: pulumi.Input<number>;
    minNonAlphanumeric?: pulumi.Input<number>;
    minNumber?: pulumi.Input<number>;
    minUpperCaseLetter?: pulumi.Input<number>;
    minimumLength?: pulumi.Input<number>;
    name?: pulumi.Input<string>;
    reusePassword?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    warnDays?: pulumi.Input<number>;
}
