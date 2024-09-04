// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ServicecatalogappregistryAttributeGroupAssociation extends pulumi.CustomResource {
    /**
     * Get an existing ServicecatalogappregistryAttributeGroupAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServicecatalogappregistryAttributeGroupAssociationState, opts?: pulumi.CustomResourceOptions): ServicecatalogappregistryAttributeGroupAssociation {
        return new ServicecatalogappregistryAttributeGroupAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/servicecatalogappregistryAttributeGroupAssociation:ServicecatalogappregistryAttributeGroupAssociation';

    /**
     * Returns true if the given object is an instance of ServicecatalogappregistryAttributeGroupAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServicecatalogappregistryAttributeGroupAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServicecatalogappregistryAttributeGroupAssociation.__pulumiType;
    }

    /**
     * The name or the Id of the Application.
     */
    public readonly application!: pulumi.Output<string>;
    public /*out*/ readonly applicationArn!: pulumi.Output<string>;
    /**
     * The name or the Id of the AttributeGroup.
     */
    public readonly attributeGroup!: pulumi.Output<string>;
    public /*out*/ readonly attributeGroupArn!: pulumi.Output<string>;

    /**
     * Create a ServicecatalogappregistryAttributeGroupAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServicecatalogappregistryAttributeGroupAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServicecatalogappregistryAttributeGroupAssociationArgs | ServicecatalogappregistryAttributeGroupAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServicecatalogappregistryAttributeGroupAssociationState | undefined;
            resourceInputs["application"] = state ? state.application : undefined;
            resourceInputs["applicationArn"] = state ? state.applicationArn : undefined;
            resourceInputs["attributeGroup"] = state ? state.attributeGroup : undefined;
            resourceInputs["attributeGroupArn"] = state ? state.attributeGroupArn : undefined;
        } else {
            const args = argsOrState as ServicecatalogappregistryAttributeGroupAssociationArgs | undefined;
            if ((!args || args.application === undefined) && !opts.urn) {
                throw new Error("Missing required property 'application'");
            }
            if ((!args || args.attributeGroup === undefined) && !opts.urn) {
                throw new Error("Missing required property 'attributeGroup'");
            }
            resourceInputs["application"] = args ? args.application : undefined;
            resourceInputs["attributeGroup"] = args ? args.attributeGroup : undefined;
            resourceInputs["applicationArn"] = undefined /*out*/;
            resourceInputs["attributeGroupArn"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServicecatalogappregistryAttributeGroupAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServicecatalogappregistryAttributeGroupAssociation resources.
 */
export interface ServicecatalogappregistryAttributeGroupAssociationState {
    /**
     * The name or the Id of the Application.
     */
    application?: pulumi.Input<string>;
    applicationArn?: pulumi.Input<string>;
    /**
     * The name or the Id of the AttributeGroup.
     */
    attributeGroup?: pulumi.Input<string>;
    attributeGroupArn?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ServicecatalogappregistryAttributeGroupAssociation resource.
 */
export interface ServicecatalogappregistryAttributeGroupAssociationArgs {
    /**
     * The name or the Id of the Application.
     */
    application: pulumi.Input<string>;
    /**
     * The name or the Id of the AttributeGroup.
     */
    attributeGroup: pulumi.Input<string>;
}
