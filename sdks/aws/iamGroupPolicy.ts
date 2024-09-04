// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IamGroupPolicy extends pulumi.CustomResource {
    /**
     * Get an existing IamGroupPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IamGroupPolicyState, opts?: pulumi.CustomResourceOptions): IamGroupPolicy {
        return new IamGroupPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/iamGroupPolicy:IamGroupPolicy';

    /**
     * Returns true if the given object is an instance of IamGroupPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IamGroupPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IamGroupPolicy.__pulumiType;
    }

    public readonly group!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly namePrefix!: pulumi.Output<string>;
    public readonly policy!: pulumi.Output<string>;

    /**
     * Create a IamGroupPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IamGroupPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IamGroupPolicyArgs | IamGroupPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IamGroupPolicyState | undefined;
            resourceInputs["group"] = state ? state.group : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["namePrefix"] = state ? state.namePrefix : undefined;
            resourceInputs["policy"] = state ? state.policy : undefined;
        } else {
            const args = argsOrState as IamGroupPolicyArgs | undefined;
            if ((!args || args.group === undefined) && !opts.urn) {
                throw new Error("Missing required property 'group'");
            }
            if ((!args || args.policy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'policy'");
            }
            resourceInputs["group"] = args ? args.group : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["namePrefix"] = args ? args.namePrefix : undefined;
            resourceInputs["policy"] = args ? args.policy : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IamGroupPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IamGroupPolicy resources.
 */
export interface IamGroupPolicyState {
    group?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    policy?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IamGroupPolicy resource.
 */
export interface IamGroupPolicyArgs {
    group: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    namePrefix?: pulumi.Input<string>;
    policy: pulumi.Input<string>;
}
