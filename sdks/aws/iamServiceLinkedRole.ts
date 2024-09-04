// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IamServiceLinkedRole extends pulumi.CustomResource {
    /**
     * Get an existing IamServiceLinkedRole resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IamServiceLinkedRoleState, opts?: pulumi.CustomResourceOptions): IamServiceLinkedRole {
        return new IamServiceLinkedRole(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/iamServiceLinkedRole:IamServiceLinkedRole';

    /**
     * Returns true if the given object is an instance of IamServiceLinkedRole.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IamServiceLinkedRole {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IamServiceLinkedRole.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly awsServiceName!: pulumi.Output<string>;
    public /*out*/ readonly createDate!: pulumi.Output<string>;
    public readonly customSuffix!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly name!: pulumi.Output<string>;
    public /*out*/ readonly path!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly uniqueId!: pulumi.Output<string>;

    /**
     * Create a IamServiceLinkedRole resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IamServiceLinkedRoleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IamServiceLinkedRoleArgs | IamServiceLinkedRoleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IamServiceLinkedRoleState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["awsServiceName"] = state ? state.awsServiceName : undefined;
            resourceInputs["createDate"] = state ? state.createDate : undefined;
            resourceInputs["customSuffix"] = state ? state.customSuffix : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["uniqueId"] = state ? state.uniqueId : undefined;
        } else {
            const args = argsOrState as IamServiceLinkedRoleArgs | undefined;
            if ((!args || args.awsServiceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'awsServiceName'");
            }
            resourceInputs["awsServiceName"] = args ? args.awsServiceName : undefined;
            resourceInputs["customSuffix"] = args ? args.customSuffix : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["createDate"] = undefined /*out*/;
            resourceInputs["name"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
            resourceInputs["uniqueId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IamServiceLinkedRole.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IamServiceLinkedRole resources.
 */
export interface IamServiceLinkedRoleState {
    arn?: pulumi.Input<string>;
    awsServiceName?: pulumi.Input<string>;
    createDate?: pulumi.Input<string>;
    customSuffix?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    uniqueId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IamServiceLinkedRole resource.
 */
export interface IamServiceLinkedRoleArgs {
    awsServiceName: pulumi.Input<string>;
    customSuffix?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
