// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class IapClient extends pulumi.CustomResource {
    /**
     * Get an existing IapClient resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: IapClientState, opts?: pulumi.CustomResourceOptions): IapClient {
        return new IapClient(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/iapClient:IapClient';

    /**
     * Returns true if the given object is an instance of IapClient.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is IapClient {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === IapClient.__pulumiType;
    }

    /**
     * Identifier of the brand to which this client is attached to. The format is
     * 'projects/{project_number}/brands/{brand_id}'.
     */
    public readonly brand!: pulumi.Output<string>;
    /**
     * Output only. Unique identifier of the OAuth client.
     */
    public /*out*/ readonly clientId!: pulumi.Output<string>;
    /**
     * Human-friendly name given to the OAuth client.
     */
    public readonly displayName!: pulumi.Output<string>;
    /**
     * Output only. Client secret of the OAuth client.
     */
    public /*out*/ readonly secret!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.IapClientTimeouts | undefined>;

    /**
     * Create a IapClient resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: IapClientArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: IapClientArgs | IapClientState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as IapClientState | undefined;
            resourceInputs["brand"] = state ? state.brand : undefined;
            resourceInputs["clientId"] = state ? state.clientId : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["secret"] = state ? state.secret : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as IapClientArgs | undefined;
            if ((!args || args.brand === undefined) && !opts.urn) {
                throw new Error("Missing required property 'brand'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            resourceInputs["brand"] = args ? args.brand : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["clientId"] = undefined /*out*/;
            resourceInputs["secret"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["secret"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(IapClient.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering IapClient resources.
 */
export interface IapClientState {
    /**
     * Identifier of the brand to which this client is attached to. The format is
     * 'projects/{project_number}/brands/{brand_id}'.
     */
    brand?: pulumi.Input<string>;
    /**
     * Output only. Unique identifier of the OAuth client.
     */
    clientId?: pulumi.Input<string>;
    /**
     * Human-friendly name given to the OAuth client.
     */
    displayName?: pulumi.Input<string>;
    /**
     * Output only. Client secret of the OAuth client.
     */
    secret?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IapClientTimeouts>;
}

/**
 * The set of arguments for constructing a IapClient resource.
 */
export interface IapClientArgs {
    /**
     * Identifier of the brand to which this client is attached to. The format is
     * 'projects/{project_number}/brands/{brand_id}'.
     */
    brand: pulumi.Input<string>;
    /**
     * Human-friendly name given to the OAuth client.
     */
    displayName: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.IapClientTimeouts>;
}
