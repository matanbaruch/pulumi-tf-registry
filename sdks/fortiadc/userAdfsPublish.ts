// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class UserAdfsPublish extends pulumi.CustomResource {
    /**
     * Get an existing UserAdfsPublish resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: UserAdfsPublishState, opts?: pulumi.CustomResourceOptions): UserAdfsPublish {
        return new UserAdfsPublish(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/userAdfsPublish:UserAdfsPublish';

    /**
     * Returns true if the given object is an instance of UserAdfsPublish.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is UserAdfsPublish {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === UserAdfsPublish.__pulumiType;
    }

    public readonly backendServerUrl!: pulumi.Output<string>;
    public readonly externalUrl!: pulumi.Output<string>;
    public readonly mkey!: pulumi.Output<string>;
    public readonly preauth!: pulumi.Output<string>;
    public readonly proxy!: pulumi.Output<string>;
    public readonly relyingParty!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a UserAdfsPublish resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: UserAdfsPublishArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: UserAdfsPublishArgs | UserAdfsPublishState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as UserAdfsPublishState | undefined;
            resourceInputs["backendServerUrl"] = state ? state.backendServerUrl : undefined;
            resourceInputs["externalUrl"] = state ? state.externalUrl : undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["preauth"] = state ? state.preauth : undefined;
            resourceInputs["proxy"] = state ? state.proxy : undefined;
            resourceInputs["relyingParty"] = state ? state.relyingParty : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as UserAdfsPublishArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            resourceInputs["backendServerUrl"] = args ? args.backendServerUrl : undefined;
            resourceInputs["externalUrl"] = args ? args.externalUrl : undefined;
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["preauth"] = args ? args.preauth : undefined;
            resourceInputs["proxy"] = args ? args.proxy : undefined;
            resourceInputs["relyingParty"] = args ? args.relyingParty : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(UserAdfsPublish.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering UserAdfsPublish resources.
 */
export interface UserAdfsPublishState {
    backendServerUrl?: pulumi.Input<string>;
    externalUrl?: pulumi.Input<string>;
    mkey?: pulumi.Input<string>;
    preauth?: pulumi.Input<string>;
    proxy?: pulumi.Input<string>;
    relyingParty?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a UserAdfsPublish resource.
 */
export interface UserAdfsPublishArgs {
    backendServerUrl?: pulumi.Input<string>;
    externalUrl?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    preauth?: pulumi.Input<string>;
    proxy?: pulumi.Input<string>;
    relyingParty?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
