// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LtmProfileBotDefense extends pulumi.CustomResource {
    /**
     * Get an existing LtmProfileBotDefense resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LtmProfileBotDefenseState, opts?: pulumi.CustomResourceOptions): LtmProfileBotDefense {
        return new LtmProfileBotDefense(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'bigip:index/ltmProfileBotDefense:LtmProfileBotDefense';

    /**
     * Returns true if the given object is an instance of LtmProfileBotDefense.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LtmProfileBotDefense {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LtmProfileBotDefense.__pulumiType;
    }

    /**
     * Specifies the profile from which this profile inherits settings. The default is the system-supplied `request-log`
     * profile
     */
    public readonly defaultsFrom!: pulumi.Output<string | undefined>;
    /**
     * User defined description for Bot Defense profile
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * Select the enforcement mode, possible values are `transparent` and `blocking`.
     */
    public readonly enforcementMode!: pulumi.Output<string>;
    /**
     * Name of the Bot Defense profile
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Profile templates specify Mitigation and Verification Settings default values. possible ptions `balanced`,`relaxed` and
     * `strict`
     */
    public readonly template!: pulumi.Output<string>;

    /**
     * Create a LtmProfileBotDefense resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LtmProfileBotDefenseArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LtmProfileBotDefenseArgs | LtmProfileBotDefenseState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LtmProfileBotDefenseState | undefined;
            resourceInputs["defaultsFrom"] = state ? state.defaultsFrom : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enforcementMode"] = state ? state.enforcementMode : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
        } else {
            const args = argsOrState as LtmProfileBotDefenseArgs | undefined;
            resourceInputs["defaultsFrom"] = args ? args.defaultsFrom : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enforcementMode"] = args ? args.enforcementMode : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LtmProfileBotDefense.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LtmProfileBotDefense resources.
 */
export interface LtmProfileBotDefenseState {
    /**
     * Specifies the profile from which this profile inherits settings. The default is the system-supplied `request-log`
     * profile
     */
    defaultsFrom?: pulumi.Input<string>;
    /**
     * User defined description for Bot Defense profile
     */
    description?: pulumi.Input<string>;
    /**
     * Select the enforcement mode, possible values are `transparent` and `blocking`.
     */
    enforcementMode?: pulumi.Input<string>;
    /**
     * Name of the Bot Defense profile
     */
    name?: pulumi.Input<string>;
    /**
     * Profile templates specify Mitigation and Verification Settings default values. possible ptions `balanced`,`relaxed` and
     * `strict`
     */
    template?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LtmProfileBotDefense resource.
 */
export interface LtmProfileBotDefenseArgs {
    /**
     * Specifies the profile from which this profile inherits settings. The default is the system-supplied `request-log`
     * profile
     */
    defaultsFrom?: pulumi.Input<string>;
    /**
     * User defined description for Bot Defense profile
     */
    description?: pulumi.Input<string>;
    /**
     * Select the enforcement mode, possible values are `transparent` and `blocking`.
     */
    enforcementMode?: pulumi.Input<string>;
    /**
     * Name of the Bot Defense profile
     */
    name?: pulumi.Input<string>;
    /**
     * Profile templates specify Mitigation and Verification Settings default values. possible ptions `balanced`,`relaxed` and
     * `strict`
     */
    template?: pulumi.Input<string>;
}
