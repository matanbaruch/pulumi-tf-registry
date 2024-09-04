// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IotRoleAlias extends pulumi.CustomResource {
    /**
     * Get an existing IotRoleAlias resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IotRoleAliasState, opts?: pulumi.CustomResourceOptions): IotRoleAlias {
        return new IotRoleAlias(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/iotRoleAlias:IotRoleAlias';

    /**
     * Returns true if the given object is an instance of IotRoleAlias.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IotRoleAlias {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IotRoleAlias.__pulumiType;
    }

    public readonly alias!: pulumi.Output<string>;
    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly credentialDuration!: pulumi.Output<number | undefined>;
    public readonly roleArn!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a IotRoleAlias resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IotRoleAliasArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IotRoleAliasArgs | IotRoleAliasState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IotRoleAliasState | undefined;
            resourceInputs["alias"] = state ? state.alias : undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["credentialDuration"] = state ? state.credentialDuration : undefined;
            resourceInputs["roleArn"] = state ? state.roleArn : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
        } else {
            const args = argsOrState as IotRoleAliasArgs | undefined;
            if ((!args || args.alias === undefined) && !opts.urn) {
                throw new Error("Missing required property 'alias'");
            }
            if ((!args || args.roleArn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'roleArn'");
            }
            resourceInputs["alias"] = args ? args.alias : undefined;
            resourceInputs["credentialDuration"] = args ? args.credentialDuration : undefined;
            resourceInputs["roleArn"] = args ? args.roleArn : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IotRoleAlias.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IotRoleAlias resources.
 */
export interface IotRoleAliasState {
    alias?: pulumi.Input<string>;
    arn?: pulumi.Input<string>;
    credentialDuration?: pulumi.Input<number>;
    roleArn?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a IotRoleAlias resource.
 */
export interface IotRoleAliasArgs {
    alias: pulumi.Input<string>;
    credentialDuration?: pulumi.Input<number>;
    roleArn: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
