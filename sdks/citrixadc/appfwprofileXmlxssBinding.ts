// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AppfwprofileXmlxssBinding extends pulumi.CustomResource {
    /**
     * Get an existing AppfwprofileXmlxssBinding resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AppfwprofileXmlxssBindingState, opts?: pulumi.CustomResourceOptions): AppfwprofileXmlxssBinding {
        return new AppfwprofileXmlxssBinding(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/appfwprofileXmlxssBinding:AppfwprofileXmlxssBinding';

    /**
     * Returns true if the given object is an instance of AppfwprofileXmlxssBinding.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AppfwprofileXmlxssBinding {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AppfwprofileXmlxssBinding.__pulumiType;
    }

    public readonly alertonly!: pulumi.Output<string>;
    public readonly asScanLocationXmlxss!: pulumi.Output<string>;
    public readonly comment!: pulumi.Output<string>;
    public readonly isautodeployed!: pulumi.Output<string>;
    public readonly isregexXmlxss!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly resourceid!: pulumi.Output<string>;
    public readonly ruletype!: pulumi.Output<string>;
    public readonly state!: pulumi.Output<string>;
    public readonly xmlxss!: pulumi.Output<string>;

    /**
     * Create a AppfwprofileXmlxssBinding resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AppfwprofileXmlxssBindingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AppfwprofileXmlxssBindingArgs | AppfwprofileXmlxssBindingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AppfwprofileXmlxssBindingState | undefined;
            resourceInputs["alertonly"] = state ? state.alertonly : undefined;
            resourceInputs["asScanLocationXmlxss"] = state ? state.asScanLocationXmlxss : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["isautodeployed"] = state ? state.isautodeployed : undefined;
            resourceInputs["isregexXmlxss"] = state ? state.isregexXmlxss : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["resourceid"] = state ? state.resourceid : undefined;
            resourceInputs["ruletype"] = state ? state.ruletype : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["xmlxss"] = state ? state.xmlxss : undefined;
        } else {
            const args = argsOrState as AppfwprofileXmlxssBindingArgs | undefined;
            if ((!args || args.xmlxss === undefined) && !opts.urn) {
                throw new Error("Missing required property 'xmlxss'");
            }
            resourceInputs["alertonly"] = args ? args.alertonly : undefined;
            resourceInputs["asScanLocationXmlxss"] = args ? args.asScanLocationXmlxss : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["isautodeployed"] = args ? args.isautodeployed : undefined;
            resourceInputs["isregexXmlxss"] = args ? args.isregexXmlxss : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["resourceid"] = args ? args.resourceid : undefined;
            resourceInputs["ruletype"] = args ? args.ruletype : undefined;
            resourceInputs["state"] = args ? args.state : undefined;
            resourceInputs["xmlxss"] = args ? args.xmlxss : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AppfwprofileXmlxssBinding.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AppfwprofileXmlxssBinding resources.
 */
export interface AppfwprofileXmlxssBindingState {
    alertonly?: pulumi.Input<string>;
    asScanLocationXmlxss?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    isautodeployed?: pulumi.Input<string>;
    isregexXmlxss?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceid?: pulumi.Input<string>;
    ruletype?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    xmlxss?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AppfwprofileXmlxssBinding resource.
 */
export interface AppfwprofileXmlxssBindingArgs {
    alertonly?: pulumi.Input<string>;
    asScanLocationXmlxss?: pulumi.Input<string>;
    comment?: pulumi.Input<string>;
    isautodeployed?: pulumi.Input<string>;
    isregexXmlxss?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    resourceid?: pulumi.Input<string>;
    ruletype?: pulumi.Input<string>;
    state?: pulumi.Input<string>;
    xmlxss: pulumi.Input<string>;
}
