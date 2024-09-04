// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NsxtAlbController extends pulumi.CustomResource {
    /**
     * Get an existing NsxtAlbController resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NsxtAlbControllerState, opts?: pulumi.CustomResourceOptions): NsxtAlbController {
        return new NsxtAlbController(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'vcd:index/nsxtAlbController:NsxtAlbController';

    /**
     * Returns true if the given object is an instance of NsxtAlbController.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NsxtAlbController {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NsxtAlbController.__pulumiType;
    }

    /**
     * NSX-T ALB Controller description
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * NSX-T ALB License type. One of 'BASIC', 'ENTERPRISE'. Must not be used from VCD 10.4.0 onwards
     */
    public readonly licenseType!: pulumi.Output<string | undefined>;
    /**
     * NSX-T ALB Controller name
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * NSX-T ALB Controller Password
     */
    public readonly password!: pulumi.Output<string>;
    /**
     * NSX-T ALB Controller URL
     */
    public readonly url!: pulumi.Output<string>;
    /**
     * NSX-T ALB Controller Username
     */
    public readonly username!: pulumi.Output<string>;
    /**
     * NSX-T ALB Controller version
     */
    public /*out*/ readonly version!: pulumi.Output<string>;

    /**
     * Create a NsxtAlbController resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NsxtAlbControllerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NsxtAlbControllerArgs | NsxtAlbControllerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NsxtAlbControllerState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["licenseType"] = state ? state.licenseType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
        } else {
            const args = argsOrState as NsxtAlbControllerArgs | undefined;
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.url === undefined) && !opts.urn) {
                throw new Error("Missing required property 'url'");
            }
            if ((!args || args.username === undefined) && !opts.urn) {
                throw new Error("Missing required property 'username'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["licenseType"] = args ? args.licenseType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["username"] = args ? args.username : undefined;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NsxtAlbController.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NsxtAlbController resources.
 */
export interface NsxtAlbControllerState {
    /**
     * NSX-T ALB Controller description
     */
    description?: pulumi.Input<string>;
    /**
     * NSX-T ALB License type. One of 'BASIC', 'ENTERPRISE'. Must not be used from VCD 10.4.0 onwards
     */
    licenseType?: pulumi.Input<string>;
    /**
     * NSX-T ALB Controller name
     */
    name?: pulumi.Input<string>;
    /**
     * NSX-T ALB Controller Password
     */
    password?: pulumi.Input<string>;
    /**
     * NSX-T ALB Controller URL
     */
    url?: pulumi.Input<string>;
    /**
     * NSX-T ALB Controller Username
     */
    username?: pulumi.Input<string>;
    /**
     * NSX-T ALB Controller version
     */
    version?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NsxtAlbController resource.
 */
export interface NsxtAlbControllerArgs {
    /**
     * NSX-T ALB Controller description
     */
    description?: pulumi.Input<string>;
    /**
     * NSX-T ALB License type. One of 'BASIC', 'ENTERPRISE'. Must not be used from VCD 10.4.0 onwards
     */
    licenseType?: pulumi.Input<string>;
    /**
     * NSX-T ALB Controller name
     */
    name?: pulumi.Input<string>;
    /**
     * NSX-T ALB Controller Password
     */
    password: pulumi.Input<string>;
    /**
     * NSX-T ALB Controller URL
     */
    url: pulumi.Input<string>;
    /**
     * NSX-T ALB Controller Username
     */
    username: pulumi.Input<string>;
}
