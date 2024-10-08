// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SlbTemplateSmpp extends pulumi.CustomResource {
    /**
     * Get an existing SlbTemplateSmpp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SlbTemplateSmppState, opts?: pulumi.CustomResourceOptions): SlbTemplateSmpp {
        return new SlbTemplateSmpp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/slbTemplateSmpp:SlbTemplateSmpp';

    /**
     * Returns true if the given object is an instance of SlbTemplateSmpp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SlbTemplateSmpp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SlbTemplateSmpp.__pulumiType;
    }

    /**
     * Respond client ENQUIRE_LINK packet directly instead of forwarding to server
     */
    public readonly clientEnquireLink!: pulumi.Output<number | undefined>;
    /**
     * SMPP Template Name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Configure the password used to bind
     */
    public readonly password!: pulumi.Output<string | undefined>;
    /**
     * Send server ENQUIRE_LINK packet for every persist connection when enable conn-reuse
     */
    public readonly serverEnquireLink!: pulumi.Output<number | undefined>;
    /**
     * Set interval of keep-alive packet for each persistent connection (second, default is 30)
     */
    public readonly serverEnquireLinkVal!: pulumi.Output<number | undefined>;
    /**
     * Force server selection on every SMPP request when enable conn-reuse
     */
    public readonly serverSelectionPerRequest!: pulumi.Output<number | undefined>;
    /**
     * Configure the user to bind (The name used to bind)
     */
    public readonly user!: pulumi.Output<string | undefined>;
    /**
     * Customized tag
     */
    public readonly userTag!: pulumi.Output<string | undefined>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a SlbTemplateSmpp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SlbTemplateSmppArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SlbTemplateSmppArgs | SlbTemplateSmppState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SlbTemplateSmppState | undefined;
            resourceInputs["clientEnquireLink"] = state ? state.clientEnquireLink : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["serverEnquireLink"] = state ? state.serverEnquireLink : undefined;
            resourceInputs["serverEnquireLinkVal"] = state ? state.serverEnquireLinkVal : undefined;
            resourceInputs["serverSelectionPerRequest"] = state ? state.serverSelectionPerRequest : undefined;
            resourceInputs["user"] = state ? state.user : undefined;
            resourceInputs["userTag"] = state ? state.userTag : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SlbTemplateSmppArgs | undefined;
            resourceInputs["clientEnquireLink"] = args ? args.clientEnquireLink : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args ? args.password : undefined;
            resourceInputs["serverEnquireLink"] = args ? args.serverEnquireLink : undefined;
            resourceInputs["serverEnquireLinkVal"] = args ? args.serverEnquireLinkVal : undefined;
            resourceInputs["serverSelectionPerRequest"] = args ? args.serverSelectionPerRequest : undefined;
            resourceInputs["user"] = args ? args.user : undefined;
            resourceInputs["userTag"] = args ? args.userTag : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SlbTemplateSmpp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SlbTemplateSmpp resources.
 */
export interface SlbTemplateSmppState {
    /**
     * Respond client ENQUIRE_LINK packet directly instead of forwarding to server
     */
    clientEnquireLink?: pulumi.Input<number>;
    /**
     * SMPP Template Name
     */
    name?: pulumi.Input<string>;
    /**
     * Configure the password used to bind
     */
    password?: pulumi.Input<string>;
    /**
     * Send server ENQUIRE_LINK packet for every persist connection when enable conn-reuse
     */
    serverEnquireLink?: pulumi.Input<number>;
    /**
     * Set interval of keep-alive packet for each persistent connection (second, default is 30)
     */
    serverEnquireLinkVal?: pulumi.Input<number>;
    /**
     * Force server selection on every SMPP request when enable conn-reuse
     */
    serverSelectionPerRequest?: pulumi.Input<number>;
    /**
     * Configure the user to bind (The name used to bind)
     */
    user?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SlbTemplateSmpp resource.
 */
export interface SlbTemplateSmppArgs {
    /**
     * Respond client ENQUIRE_LINK packet directly instead of forwarding to server
     */
    clientEnquireLink?: pulumi.Input<number>;
    /**
     * SMPP Template Name
     */
    name?: pulumi.Input<string>;
    /**
     * Configure the password used to bind
     */
    password?: pulumi.Input<string>;
    /**
     * Send server ENQUIRE_LINK packet for every persist connection when enable conn-reuse
     */
    serverEnquireLink?: pulumi.Input<number>;
    /**
     * Set interval of keep-alive packet for each persistent connection (second, default is 30)
     */
    serverEnquireLinkVal?: pulumi.Input<number>;
    /**
     * Force server selection on every SMPP request when enable conn-reuse
     */
    serverSelectionPerRequest?: pulumi.Input<number>;
    /**
     * Configure the user to bind (The name used to bind)
     */
    user?: pulumi.Input<string>;
    /**
     * Customized tag
     */
    userTag?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
