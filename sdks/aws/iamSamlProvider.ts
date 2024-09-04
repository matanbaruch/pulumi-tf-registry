// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class IamSamlProvider extends pulumi.CustomResource {
    /**
     * Get an existing IamSamlProvider resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IamSamlProviderState, opts?: pulumi.CustomResourceOptions): IamSamlProvider {
        return new IamSamlProvider(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/iamSamlProvider:IamSamlProvider';

    /**
     * Returns true if the given object is an instance of IamSamlProvider.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IamSamlProvider {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IamSamlProvider.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly samlMetadataDocument!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly validUntil!: pulumi.Output<string>;

    /**
     * Create a IamSamlProvider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IamSamlProviderArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IamSamlProviderArgs | IamSamlProviderState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IamSamlProviderState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["samlMetadataDocument"] = state ? state.samlMetadataDocument : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["validUntil"] = state ? state.validUntil : undefined;
        } else {
            const args = argsOrState as IamSamlProviderArgs | undefined;
            if ((!args || args.samlMetadataDocument === undefined) && !opts.urn) {
                throw new Error("Missing required property 'samlMetadataDocument'");
            }
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["samlMetadataDocument"] = args ? args.samlMetadataDocument : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["validUntil"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(IamSamlProvider.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IamSamlProvider resources.
 */
export interface IamSamlProviderState {
    arn?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    samlMetadataDocument?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    validUntil?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a IamSamlProvider resource.
 */
export interface IamSamlProviderArgs {
    name?: pulumi.Input<string>;
    samlMetadataDocument: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
