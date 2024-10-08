// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CloudAccountLogProfileAssociation extends pulumi.CustomResource {
    /**
     * Get an existing CloudAccountLogProfileAssociation resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudAccountLogProfileAssociationState, opts?: pulumi.CustomResourceOptions): CloudAccountLogProfileAssociation {
        return new CloudAccountLogProfileAssociation(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'valtix:index/cloudAccountLogProfileAssociation:CloudAccountLogProfileAssociation';

    /**
     * Returns true if the given object is an instance of CloudAccountLogProfileAssociation.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudAccountLogProfileAssociation {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudAccountLogProfileAssociation.__pulumiType;
    }

    public readonly cspAccountName!: pulumi.Output<string>;
    public readonly logProfileId!: pulumi.Output<number | undefined>;

    /**
     * Create a CloudAccountLogProfileAssociation resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudAccountLogProfileAssociationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudAccountLogProfileAssociationArgs | CloudAccountLogProfileAssociationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudAccountLogProfileAssociationState | undefined;
            resourceInputs["cspAccountName"] = state ? state.cspAccountName : undefined;
            resourceInputs["logProfileId"] = state ? state.logProfileId : undefined;
        } else {
            const args = argsOrState as CloudAccountLogProfileAssociationArgs | undefined;
            if ((!args || args.cspAccountName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cspAccountName'");
            }
            resourceInputs["cspAccountName"] = args ? args.cspAccountName : undefined;
            resourceInputs["logProfileId"] = args ? args.logProfileId : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudAccountLogProfileAssociation.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudAccountLogProfileAssociation resources.
 */
export interface CloudAccountLogProfileAssociationState {
    cspAccountName?: pulumi.Input<string>;
    logProfileId?: pulumi.Input<number>;
}

/**
 * The set of arguments for constructing a CloudAccountLogProfileAssociation resource.
 */
export interface CloudAccountLogProfileAssociationArgs {
    cspAccountName: pulumi.Input<string>;
    logProfileId?: pulumi.Input<number>;
}
