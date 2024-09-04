// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemPasswordpolicy extends pulumi.CustomResource {
    /**
     * Get an existing SystemPasswordpolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemPasswordpolicyState, opts?: pulumi.CustomResourceOptions): SystemPasswordpolicy {
        return new SystemPasswordpolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmgdevice:index/systemPasswordpolicy:SystemPasswordpolicy';

    /**
     * Returns true if the given object is an instance of SystemPasswordpolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemPasswordpolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemPasswordpolicy.__pulumiType;
    }

    public readonly applyTos!: pulumi.Output<string[]>;
    public readonly change4Characters!: pulumi.Output<string | undefined>;
    public readonly deviceName!: pulumi.Output<string>;
    public readonly expireDay!: pulumi.Output<number>;
    public readonly expireStatus!: pulumi.Output<string | undefined>;
    public readonly minChangeCharacters!: pulumi.Output<number | undefined>;
    public readonly minLowerCaseLetter!: pulumi.Output<number | undefined>;
    public readonly minNonAlphanumeric!: pulumi.Output<number | undefined>;
    public readonly minNumber!: pulumi.Output<number | undefined>;
    public readonly minUpperCaseLetter!: pulumi.Output<number | undefined>;
    public readonly minimumLength!: pulumi.Output<number | undefined>;
    public readonly reusePassword!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a SystemPasswordpolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemPasswordpolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemPasswordpolicyArgs | SystemPasswordpolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemPasswordpolicyState | undefined;
            resourceInputs["applyTos"] = state ? state.applyTos : undefined;
            resourceInputs["change4Characters"] = state ? state.change4Characters : undefined;
            resourceInputs["deviceName"] = state ? state.deviceName : undefined;
            resourceInputs["expireDay"] = state ? state.expireDay : undefined;
            resourceInputs["expireStatus"] = state ? state.expireStatus : undefined;
            resourceInputs["minChangeCharacters"] = state ? state.minChangeCharacters : undefined;
            resourceInputs["minLowerCaseLetter"] = state ? state.minLowerCaseLetter : undefined;
            resourceInputs["minNonAlphanumeric"] = state ? state.minNonAlphanumeric : undefined;
            resourceInputs["minNumber"] = state ? state.minNumber : undefined;
            resourceInputs["minUpperCaseLetter"] = state ? state.minUpperCaseLetter : undefined;
            resourceInputs["minimumLength"] = state ? state.minimumLength : undefined;
            resourceInputs["reusePassword"] = state ? state.reusePassword : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as SystemPasswordpolicyArgs | undefined;
            resourceInputs["applyTos"] = args ? args.applyTos : undefined;
            resourceInputs["change4Characters"] = args ? args.change4Characters : undefined;
            resourceInputs["deviceName"] = args ? args.deviceName : undefined;
            resourceInputs["expireDay"] = args ? args.expireDay : undefined;
            resourceInputs["expireStatus"] = args ? args.expireStatus : undefined;
            resourceInputs["minChangeCharacters"] = args ? args.minChangeCharacters : undefined;
            resourceInputs["minLowerCaseLetter"] = args ? args.minLowerCaseLetter : undefined;
            resourceInputs["minNonAlphanumeric"] = args ? args.minNonAlphanumeric : undefined;
            resourceInputs["minNumber"] = args ? args.minNumber : undefined;
            resourceInputs["minUpperCaseLetter"] = args ? args.minUpperCaseLetter : undefined;
            resourceInputs["minimumLength"] = args ? args.minimumLength : undefined;
            resourceInputs["reusePassword"] = args ? args.reusePassword : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemPasswordpolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemPasswordpolicy resources.
 */
export interface SystemPasswordpolicyState {
    applyTos?: pulumi.Input<pulumi.Input<string>[]>;
    change4Characters?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    expireDay?: pulumi.Input<number>;
    expireStatus?: pulumi.Input<string>;
    minChangeCharacters?: pulumi.Input<number>;
    minLowerCaseLetter?: pulumi.Input<number>;
    minNonAlphanumeric?: pulumi.Input<number>;
    minNumber?: pulumi.Input<number>;
    minUpperCaseLetter?: pulumi.Input<number>;
    minimumLength?: pulumi.Input<number>;
    reusePassword?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemPasswordpolicy resource.
 */
export interface SystemPasswordpolicyArgs {
    applyTos?: pulumi.Input<pulumi.Input<string>[]>;
    change4Characters?: pulumi.Input<string>;
    deviceName?: pulumi.Input<string>;
    expireDay?: pulumi.Input<number>;
    expireStatus?: pulumi.Input<string>;
    minChangeCharacters?: pulumi.Input<number>;
    minLowerCaseLetter?: pulumi.Input<number>;
    minNonAlphanumeric?: pulumi.Input<number>;
    minNumber?: pulumi.Input<number>;
    minUpperCaseLetter?: pulumi.Input<number>;
    minimumLength?: pulumi.Input<number>;
    reusePassword?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
