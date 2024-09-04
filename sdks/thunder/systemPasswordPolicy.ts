// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemPasswordPolicy extends pulumi.CustomResource {
    /**
     * Get an existing SystemPasswordPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemPasswordPolicyState, opts?: pulumi.CustomResourceOptions): SystemPasswordPolicy {
        return new SystemPasswordPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/systemPasswordPolicy:SystemPasswordPolicy';

    /**
     * Returns true if the given object is an instance of SystemPasswordPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemPasswordPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemPasswordPolicy.__pulumiType;
    }

    /**
     * 'Strict': Strict: Max Age-60 Days; 'Medium': Medium: Max Age- 90 Days; 'Simple': Simple: Max Age-120 Days;
     */
    public readonly aging!: pulumi.Output<string | undefined>;
    /**
     * 'Strict': Strict: Min length:8, Min Lower Case:2, Min Upper Case:2, Min Numbers:2, Min Special Character:1, CHANGE Min 8
     * Characters; 'Medium': Medium: Min length:6, Min Lower Case:2, Min Upper Case:2, Min Numbers:1, Min Special Character:1,
     * CHANGE Min 6 Characters; 'Default': Default: Min length:9, Min Lower Case:1, Min Upper Case:1, Min Numbers:1, Min
     * Special Character:1, CHANGE Min 1 Characters; 'Simple': Simple: Min length:4, Min Lower Case:1, Min Upper Case:1, Min
     * Numbers:1, Min Special Character:0, CHANGE Min 4 Characters;
     */
    public readonly complexity!: pulumi.Output<string | undefined>;
    /**
     * '0': Will disable the check; '3': Three consecutive characters on keyboard will not be allowed.; '4': Four consecutive
     * characters on keyboard will not be allowed.; '5': Five consecutive characters on keyboard will not be allowed.;
     */
    public readonly forbidConsecutiveCharacter!: pulumi.Output<string | undefined>;
    /**
     * 'Strict': Strict: Does not allow upto 5 old passwords; 'Medium': Medium: Does not allow upto 4 old passwords; 'Simple':
     * Simple: Does not allow upto 3 old passwords;
     */
    public readonly history!: pulumi.Output<string | undefined>;
    /**
     * Configure custom password length
     */
    public readonly minPswdLen!: pulumi.Output<number | undefined>;
    /**
     * 'enable': Prohibition of consecutive repeated input of the same letter/number, case sensitive; 'disable': Will not check
     * if the password contains repeat characters;
     */
    public readonly repeatCharacterCheck!: pulumi.Output<string | undefined>;
    /**
     * 'enable': Prohibition to set password contains user account, case sensitive; 'disable': Will not check if the password
     * contains user account;
     */
    public readonly usernameCheck!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SystemPasswordPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemPasswordPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemPasswordPolicyArgs | SystemPasswordPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemPasswordPolicyState | undefined;
            resourceInputs["aging"] = state ? state.aging : undefined;
            resourceInputs["complexity"] = state ? state.complexity : undefined;
            resourceInputs["forbidConsecutiveCharacter"] = state ? state.forbidConsecutiveCharacter : undefined;
            resourceInputs["history"] = state ? state.history : undefined;
            resourceInputs["minPswdLen"] = state ? state.minPswdLen : undefined;
            resourceInputs["repeatCharacterCheck"] = state ? state.repeatCharacterCheck : undefined;
            resourceInputs["usernameCheck"] = state ? state.usernameCheck : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SystemPasswordPolicyArgs | undefined;
            resourceInputs["aging"] = args ? args.aging : undefined;
            resourceInputs["complexity"] = args ? args.complexity : undefined;
            resourceInputs["forbidConsecutiveCharacter"] = args ? args.forbidConsecutiveCharacter : undefined;
            resourceInputs["history"] = args ? args.history : undefined;
            resourceInputs["minPswdLen"] = args ? args.minPswdLen : undefined;
            resourceInputs["repeatCharacterCheck"] = args ? args.repeatCharacterCheck : undefined;
            resourceInputs["usernameCheck"] = args ? args.usernameCheck : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemPasswordPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemPasswordPolicy resources.
 */
export interface SystemPasswordPolicyState {
    /**
     * 'Strict': Strict: Max Age-60 Days; 'Medium': Medium: Max Age- 90 Days; 'Simple': Simple: Max Age-120 Days;
     */
    aging?: pulumi.Input<string>;
    /**
     * 'Strict': Strict: Min length:8, Min Lower Case:2, Min Upper Case:2, Min Numbers:2, Min Special Character:1, CHANGE Min 8
     * Characters; 'Medium': Medium: Min length:6, Min Lower Case:2, Min Upper Case:2, Min Numbers:1, Min Special Character:1,
     * CHANGE Min 6 Characters; 'Default': Default: Min length:9, Min Lower Case:1, Min Upper Case:1, Min Numbers:1, Min
     * Special Character:1, CHANGE Min 1 Characters; 'Simple': Simple: Min length:4, Min Lower Case:1, Min Upper Case:1, Min
     * Numbers:1, Min Special Character:0, CHANGE Min 4 Characters;
     */
    complexity?: pulumi.Input<string>;
    /**
     * '0': Will disable the check; '3': Three consecutive characters on keyboard will not be allowed.; '4': Four consecutive
     * characters on keyboard will not be allowed.; '5': Five consecutive characters on keyboard will not be allowed.;
     */
    forbidConsecutiveCharacter?: pulumi.Input<string>;
    /**
     * 'Strict': Strict: Does not allow upto 5 old passwords; 'Medium': Medium: Does not allow upto 4 old passwords; 'Simple':
     * Simple: Does not allow upto 3 old passwords;
     */
    history?: pulumi.Input<string>;
    /**
     * Configure custom password length
     */
    minPswdLen?: pulumi.Input<number>;
    /**
     * 'enable': Prohibition of consecutive repeated input of the same letter/number, case sensitive; 'disable': Will not check
     * if the password contains repeat characters;
     */
    repeatCharacterCheck?: pulumi.Input<string>;
    /**
     * 'enable': Prohibition to set password contains user account, case sensitive; 'disable': Will not check if the password
     * contains user account;
     */
    usernameCheck?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemPasswordPolicy resource.
 */
export interface SystemPasswordPolicyArgs {
    /**
     * 'Strict': Strict: Max Age-60 Days; 'Medium': Medium: Max Age- 90 Days; 'Simple': Simple: Max Age-120 Days;
     */
    aging?: pulumi.Input<string>;
    /**
     * 'Strict': Strict: Min length:8, Min Lower Case:2, Min Upper Case:2, Min Numbers:2, Min Special Character:1, CHANGE Min 8
     * Characters; 'Medium': Medium: Min length:6, Min Lower Case:2, Min Upper Case:2, Min Numbers:1, Min Special Character:1,
     * CHANGE Min 6 Characters; 'Default': Default: Min length:9, Min Lower Case:1, Min Upper Case:1, Min Numbers:1, Min
     * Special Character:1, CHANGE Min 1 Characters; 'Simple': Simple: Min length:4, Min Lower Case:1, Min Upper Case:1, Min
     * Numbers:1, Min Special Character:0, CHANGE Min 4 Characters;
     */
    complexity?: pulumi.Input<string>;
    /**
     * '0': Will disable the check; '3': Three consecutive characters on keyboard will not be allowed.; '4': Four consecutive
     * characters on keyboard will not be allowed.; '5': Five consecutive characters on keyboard will not be allowed.;
     */
    forbidConsecutiveCharacter?: pulumi.Input<string>;
    /**
     * 'Strict': Strict: Does not allow upto 5 old passwords; 'Medium': Medium: Does not allow upto 4 old passwords; 'Simple':
     * Simple: Does not allow upto 3 old passwords;
     */
    history?: pulumi.Input<string>;
    /**
     * Configure custom password length
     */
    minPswdLen?: pulumi.Input<number>;
    /**
     * 'enable': Prohibition of consecutive repeated input of the same letter/number, case sensitive; 'disable': Will not check
     * if the password contains repeat characters;
     */
    repeatCharacterCheck?: pulumi.Input<string>;
    /**
     * 'enable': Prohibition to set password contains user account, case sensitive; 'disable': Will not check if the password
     * contains user account;
     */
    usernameCheck?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
