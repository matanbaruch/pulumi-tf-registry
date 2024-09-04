// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Contact extends pulumi.CustomResource {
    /**
     * Get an existing Contact resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContactState, opts?: pulumi.CustomResourceOptions): Contact {
        return new Contact(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'victorops:index/contact:Contact';

    /**
     * Returns true if the given object is an instance of Contact.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Contact {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Contact.__pulumiType;
    }

    public /*out*/ readonly computedValue!: pulumi.Output<string>;
    public /*out*/ readonly internalId!: pulumi.Output<number>;
    public readonly label!: pulumi.Output<string>;
    public readonly type!: pulumi.Output<string>;
    public readonly userName!: pulumi.Output<string>;
    public readonly value!: pulumi.Output<string>;

    /**
     * Create a Contact resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ContactArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContactArgs | ContactState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContactState | undefined;
            resourceInputs["computedValue"] = state ? state.computedValue : undefined;
            resourceInputs["internalId"] = state ? state.internalId : undefined;
            resourceInputs["label"] = state ? state.label : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["userName"] = state ? state.userName : undefined;
            resourceInputs["value"] = state ? state.value : undefined;
        } else {
            const args = argsOrState as ContactArgs | undefined;
            if ((!args || args.label === undefined) && !opts.urn) {
                throw new Error("Missing required property 'label'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            if ((!args || args.userName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'userName'");
            }
            if ((!args || args.value === undefined) && !opts.urn) {
                throw new Error("Missing required property 'value'");
            }
            resourceInputs["label"] = args ? args.label : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["userName"] = args ? args.userName : undefined;
            resourceInputs["value"] = args ? args.value : undefined;
            resourceInputs["computedValue"] = undefined /*out*/;
            resourceInputs["internalId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Contact.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Contact resources.
 */
export interface ContactState {
    computedValue?: pulumi.Input<string>;
    internalId?: pulumi.Input<number>;
    label?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
    userName?: pulumi.Input<string>;
    value?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Contact resource.
 */
export interface ContactArgs {
    label: pulumi.Input<string>;
    type: pulumi.Input<string>;
    userName: pulumi.Input<string>;
    value: pulumi.Input<string>;
}
